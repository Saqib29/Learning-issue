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
         appBar: AppBar(title: Text("Column"),),
         body: Column(
           children: <Widget>[
             Container(
               height: 200,
               width: 150,
               color: Colors.deepOrange,
             ),
             SizedBox(height: 10,),
             Container(
               height: 200,
               width: 150,
               color: Colors.orange,
             ),
             SizedBox(height: 10  ),
             Container(
               height: 200,
               width: 150,
               color: Colors.orange,
             ),
           ],
         ),
        ),
      ),
      
    );
  }
}