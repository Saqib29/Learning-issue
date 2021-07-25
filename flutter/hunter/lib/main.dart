import 'package:flutter/material.dart';


// void main() {
//   runApp(MyApp());
// }

void main() => runApp(MyApp());

class MyApp extends StatelessWidget{
  
  Widget build(BuildContext context){
    return MaterialApp(
      home: Scaffold(

        appBar: AppBar(
          title: Text("Learn Flutter"),
        ),

        body: Center(
          child: Text("Hey buddy what's going on"),
        ),

        floatingActionButton: FloatingActionButton(
          onPressed: null,
          child: Text("+")
        ),

      ),
    );
  }
}