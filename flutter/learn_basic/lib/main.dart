import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: SafeArea(
        child: Scaffold(
          body: Text("I love coding", style: TextStyle(fontSize: 35),),
          backgroundColor: Colors.deepOrange,
        ),
      ),
    );
  }
}