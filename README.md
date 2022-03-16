Norieto Network Toplogy Mapper

Purpose: To create a simple to use, seamless interface for mapping physical network topologies based on port numbers and device ID's.

Inspiration: Struggles in finding a sinmple topology mapping software to help me document what cables were going where in my own environments.

Auth: All requests other than auth related requests must be sent with a corresponding token in the header of the request. 

As everything is based on a singular JSON data format on the front-end, these are currently the only availabe API requests that can be made:
-Get: 
-Update: 
-Delete:


All user accounts are generated with an empty JSONB data object, and all subsequent changes to the data are performed by a full POST request to the API backend.


Data structure looks as follows: 
``{ "devices": 
    [
      { "device1": [null, 2, 3, null, null, null, null]},
      { "device2": [null, 3, 1, null, null, null]),
      { "device3": [null, 1, null, null]
     ]
  }
``

- Main devices array
    * device name: array of length = num of ports on device
        - each index in array referencing index in main devices array, or null if not connected
    
 


