# Node-Command-Line-Arguments

process.argv

The first element of this array is the absolute pathname of the executable that started the Node.js process. It should be a path ending with node i.e. /usr/local/bin/node. This can also be found in the process.execPath property.

The second element will be the path to the JavaScript file being executed.

The remaining elements will be any additional command line arguments. So, if you want to access the command-line arguments, you need to start at the 3rd element or index 2 of the argv array. Also, be aware that all elements in the argv array are expressed as JavaScript Strings. Depending on your use case, you may need to coerce them to another data type.

Requirements

Create a JavaScript file to act as a Node.js program named args.js. This program should accept at least one number as a command-line argument. The arguments should be summed up into a single value.

Don't worry about floating point rounding errors.

Expected:

$ ./args.js 1
1
$ ./args.js -.42 0 3.14
2.72
$ ./args.js .1 .2
0.30000000000000004