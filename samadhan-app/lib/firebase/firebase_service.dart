import 'package:flutter/foundation.dart';

// Local storage for users (mock database)
Map<String, Map<String, dynamic>> _usersDatabase = {
  'rishirajraj124@gmail.com': {
    'uid': 'user_001',
    'email': 'rishirajraj124@gmail.com',
    'password': '123456',
    'displayName': 'Rishiraj',
    'createdAt': '2024-01-01',
  },
};

class UserCredential {
  final User user;
  UserCredential({required this.user});
}

class User {
  final String uid;
  final String? email;
  final String? displayName;

  User({required this.uid, this.email, this.displayName});
}

class FirebaseService {
  static final FirebaseService _instance = FirebaseService._internal();
  User? _currentUser;

  factory FirebaseService() {
    return _instance;
  }

  FirebaseService._internal();

  /// Sign up with email and password - checks if user already exists
  Future<UserCredential> signUpWithEmailPassword({
    required String email,
    required String password,
    required String fullName,
  }) async {
    try {
      // Simulate network delay
      await Future.delayed(const Duration(milliseconds: 800));

      // Check if user already exists
      if (_usersDatabase.containsKey(email)) {
        throw Exception(
          'User with this email already exists. Please login instead.',
        );
      }

      // Validate password strength
      if (password.length < 6) {
        throw Exception('Password must be at least 6 characters long.');
      }

      // Create new user
      final uid = 'user_${DateTime.now().millisecondsSinceEpoch}';
      _usersDatabase[email] = {
        'uid': uid,
        'email': email,
        'password': password,
        'displayName': fullName,
        'createdAt': DateTime.now().toIso8601String(),
      };

      // Auto-login after signup
      final user = User(uid: uid, email: email, displayName: fullName);
      _currentUser = user;

      debugPrint('✅ User registered successfully: $email');
      return UserCredential(user: user);
    } catch (e) {
      debugPrint('❌ Sign up failed: $e');
      throw Exception('Sign up failed: ${e.toString()}');
    }
  }

  /// Sign in with email and password - verifies user exists
  Future<UserCredential> signInWithEmailPassword({
    required String email,
    required String password,
  }) async {
    try {
      // Simulate network delay
      await Future.delayed(const Duration(milliseconds: 800));

      // Check if user exists
      if (!_usersDatabase.containsKey(email)) {
        throw Exception('User not found. Please sign up first.');
      }

      final userData = _usersDatabase[email]!;

      // Verify password
      if (userData['password'] != password) {
        throw Exception('Invalid password. Please try again.');
      }

      // Create user object
      final user = User(
        uid: userData['uid'],
        email: userData['email'],
        displayName: userData['displayName'],
      );
      _currentUser = user;

      debugPrint('✅ User logged in successfully: $email');
      return UserCredential(user: user);
    } catch (e) {
      debugPrint('❌ Sign in failed: $e');
      throw Exception(e.toString());
    }
  }

  /// Check if user already exists
  Future<bool> userExists(String email) async {
    try {
      await Future.delayed(const Duration(milliseconds: 300));
      final exists = _usersDatabase.containsKey(email);
      debugPrint('User exists check for $email: $exists');
      return exists;
    } catch (e) {
      debugPrint('Error checking user existence: $e');
      return false;
    }
  }

  /// Sign out
  Future<void> signOut() async {
    try {
      await Future.delayed(const Duration(milliseconds: 300));
      debugPrint('✅ User signed out: ${_currentUser?.email}');
      _currentUser = null;
    } catch (e) {
      throw Exception('Sign out failed: ${e.toString()}');
    }
  }

  /// Get current user
  User? getCurrentUser() {
    return _currentUser;
  }

  /// Report issue
  Future<void> reportIssue({
    required String title,
    required String description,
    required String location,
    required String type,
  }) async {
    try {
      if (_currentUser == null) {
        throw Exception('User not authenticated. Please login first.');
      }

      await Future.delayed(const Duration(milliseconds: 800));

      // In production, store to Firestore
      debugPrint(
        '✅ Issue reported by ${_currentUser!.email}: $title at $location',
      );
    } catch (e) {
      debugPrint('❌ Failed to report issue: $e');
      throw Exception('Failed to report issue: ${e.toString()}');
    }
  }

  /// Get user profile
  Future<Map<String, dynamic>?> getUserProfile(String uid) async {
    try {
      await Future.delayed(const Duration(milliseconds: 500));

      if (_currentUser == null || _currentUser!.uid != uid) {
        return null;
      }

      // Find user by uid
      for (var userData in _usersDatabase.values) {
        if (userData['uid'] == uid) {
          return {
            'uid': uid,
            'email': userData['email'],
            'displayName': userData['displayName'],
            'createdAt': userData['createdAt'],
          };
        }
      }
      return null;
    } catch (e) {
      debugPrint('Error getting user profile: $e');
      throw Exception('Failed to get user profile: ${e.toString()}');
    }
  }

  /// Get all registered users (for debugging)
  Map<String, Map<String, dynamic>> getAllUsers() {
    return Map.from(_usersDatabase);
  }

  /// Reset database (for testing)
  void resetDatabase() {
    _usersDatabase.clear();
    _usersDatabase = {
      'rishirajraj124@gmail.com': {
        'uid': 'user_001',
        'email': 'rishirajraj124@gmail.com',
        'password': '123456',
        'displayName': 'Rishiraj',
        'createdAt': '2024-01-01',
      },
    };
    _currentUser = null;
    debugPrint('Database reset to default state');
  }
}
