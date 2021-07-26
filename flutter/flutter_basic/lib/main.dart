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
      home: SafeArea(
        child: Scaffold(
          appBar: AppBar(title: Text('Row'),),
          body: ListView(
           children: <Widget>[
             Column(
                children: <Widget>[
              Container(
                height: 200,
                width: 150,
                color: Colors.greenAccent,
              ),
              SizedBox(width: 10,),
              Container(
                height: 200,
                width: 150,
                color: Colors.greenAccent,
              ),
              SizedBox(width: 10,),
              Container(
                height: 200,
                width: 150,
                color: Colors.greenAccent,
              ),
            ],
             ),
           ],
          )
          ),
        ),
      
    );
  }
}
