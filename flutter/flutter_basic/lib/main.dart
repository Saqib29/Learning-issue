import 'package:flutter/material.dart';
import 'package:liquid_swipe/liquid_swipe.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {

    final pages = [
      Container(color: Colors.green),
      Container(color: Colors.red),
      Container(color: Colors.blue),
      Container(color: Colors.yellow),
    ];
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: LiquidSwipe(pages: pages),
      ),
    );
  }
}

