import 'package:flutter/material.dart';
import 'package:liquid_swipe/liquid_swipe.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Column(
          children: <Widget>[
            Expanded(
              flex: 2,
              child: Container(color: Colors.green)
            ),
            Expanded(
              flex: 3,
              child: Container(color: Colors.blue)
            ),
            Expanded(
              flex: 2,
              child: Container(color: Colors.yellow)
            )
          ],
        ),
      ),
    );
  }
}

