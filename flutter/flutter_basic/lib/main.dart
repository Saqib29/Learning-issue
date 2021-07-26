import 'package:flutter/material.dart';
import 'package:flutter_basic/page1.dart';
import 'package:flutter_basic/page2.dart';
import 'package:flutter_basic/page3.dart';
import 'package:flutter_basic/page4.dart';
import 'package:liquid_swipe/liquid_swipe.dart';

void main() =>  runApp(MyApp());


class MyApp extends StatefulWidget {

  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  PageController _controller = PageController(
    initialPage: 3,
  );

  @override
  void dispose(){
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: PageView(
          scrollDirection: Axis.vertical,
          controller: _controller,
          children: <Widget>[
            Page1(),
            Page2(),
            Page3(),
            Page4(),
          ],
        )
      )
    );
  }
}