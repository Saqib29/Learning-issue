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
    
    return  MaterialApp(
      home: Scaffold(
        floatingActionButton: FloatingActionButton(onPressed: (){}, child: Icon(Icons.add)),
        body: Center(
          child: Stack(
            alignment: Alignment.bottomCenter,
            overflow: Overflow.visible,
            children: <Widget>[
              Container(
                height: 200,
                width: 200,
                color: Colors.amber
              ),
              Positioned(bottom: -50, child: CircleAvatar(radius: 50,))
            ],
          )
        )
      ),
    );
  }
}