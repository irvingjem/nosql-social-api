const mongoose = require('mongoose')
const express = require('express')


await mongoose.connect('mongodb://localhost/my_database');

main().catch(err => console.log(err));