import 'package:flutter/material.dart';
import 'package:flutter_basic/second.dart';


void main() =>  runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(home: HomePage());
  }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: CircleAvatar(
          radius:50,
          child: GestureDetector(
            child: Hero(
              tag: "add",
              child: Icon(
                Icons.add_a_photo,
                size: 50,
              )
            ),
            onTap: () {
              Navigator.push(
                context, MaterialPageRoute(builder: (context) => Second())
              );
            },
          )
        )
      )
    );
  }
}