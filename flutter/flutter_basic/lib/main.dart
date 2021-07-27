import 'package:flutter/material.dart';
import 'package:flutter_basic/five.dart';
import 'package:flutter_basic/four.dart';
import 'package:flutter_basic/one.dart';
import 'package:flutter_basic/three.dart';
import 'package:flutter_basic/two.dart';


void main() =>  runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  @override  
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  var _currentindex = 0;
  var pages = [
    One(),
    Two(),
    Three(),
    Four(),
    Five(),
  ];
  @override
  Widget build(BuildContext context){
    return Scaffold(
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentindex,
        items: [
        BottomNavigationBarItem(
          backgroundColor: Colors.cyan,
          icon: Icon((Icons.message)),
          title: Text("Message"),
        ),
        BottomNavigationBarItem(
          icon: Icon((Icons.call)),
          title: Text("Call"),
        ),
        BottomNavigationBarItem(
          icon: Icon((Icons.pan_tool)),
          title: Text("pan tool"),
        ),
        BottomNavigationBarItem(
          icon: Icon((Icons.radio)),
          title: Text("Radio"),
        ),
        BottomNavigationBarItem(
          icon: Icon((Icons.contact_page)),
          title: Text("Contact"),
        ),
      ],
      onTap: (index) {
        setState(() {
          _currentindex=index;
        });
      }
      ),
      body: pages[_currentindex],
      
    );
  }
}