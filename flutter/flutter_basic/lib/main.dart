import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: HomePage(),
    );
  }
}


class HomePage extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    var containerHieght = MediaQuery.of(context).size.height;
    return  SafeArea(
        child: Scaffold(
          body: Center(
            child: Container(
              height:  containerHieght/2,
              width: containerHieght/4,
              color: Colors.deepOrange,
            ),
          ),
        ),
      );
  }
}