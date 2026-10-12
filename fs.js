// fs - file system module

const fs = require('fs');   // importing the file system module


// creating a directory and checking if the directory already exists or not
if(!fs.existsSync('./docs')) {
    fs.mkdir('./docs', (err) => {
        if (err) {
            console.error('Error creating directory:', err);
        } else {
            console.log('Directory created successfully');
        }
    });
}

//writing to a file
fs.writeFile('./docs/test.txt', 'this is the test file of the node js', (err) => {
    if(err){
        console.log(err.message);
    }else{
        console.log('File written successfully');
    }
})

// reading from a file
fs.readFile('./docs/test.txt', (err,data) => {
    if(err) {
        console.log(err.message);
    }
    else{
        console.log(data.toString());
    }
})