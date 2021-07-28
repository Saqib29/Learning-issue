import 'package:flutter/material.dart';
import 'package:flutter_basic/one.dart';
import 'package:flutter_basic/two.dart';


void main() =>  runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: CustomScrollView(
          slivers: <Widget>[
            SliverAppBar(
              pinned: true,
              expandedHeight: 200,
              backgroundColor: Colors.red,
              flexibleSpace: FlexibleSpaceBar(
                title: Text("Easy Explanation"),
              ),
            ),
              SliverList(delegate: SliverChildListDelegate(<Widget>[
                addDetails("One", "This is one"),
                addDetails("Two", "This is two"),
                addDetails("Three", "This is three"),
                addDetails("Four", "This is four"),
                addDetails("Five", "This is five"),
                addDetails("Six", "This is six"),
                addDetails("Seven", "This is seven"),
                addDetails("Eight", "This is eight"),
                addDetails("Nine", "This is nine"),
                addDetails("Ten", "This is ten"),
                addDetails("Elaven", "This is elaven"),
              ]))
          ],
        ),
      ),
    );
  }
}

Widget addDetails(
  String name,
  String description,
) {
  return ListTile(
    title: Text(name),
    subtitle: Text(description),
    leading: CircleAvatar(
      child: Text(name[0]),
    )
  );
}