import "package:flutter/material.dart";

void doont() {
  print("object");
}

void main() {
  var myapp = MaterialApp(
    home: Scaffold(
        appBar: AppBar(title: Text("app for android")),
        floatingActionButton: FloatingActionButton(
            backgroundColor: Color.fromRGBO(45, 150, 0, 10), onPressed: doont)),
  );
  runApp(myapp);
}
