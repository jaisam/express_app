const express = require('express');
const router = express.Router();
const members = require('../../Model/Members');

module.exports = router;


// [start] Get all members
router.get('/', (req,res) => {
    //console.log(members);
    res.json(members);
})
//[end] Get all members


// [start] Get specific member using ID
router.get('/:id', (req,res) => {

/* My method
    //Unsetting local object 
    var searchedMember = undefined;

    /* 
    This will just delete properties of object, but its reference will still be there in memory
    delete searchedMember ;
    

    // Finding member with ID
    members.forEach(member => {
        if(member.id === parseInt(req.params.id)) {
            searchedMember = member;
            //console.log(searchedMember);
        }
    });

    // If member found then return member else throw error by setting status = 400
    if (searchedMember) {
        res.json(searchedMember);
    }
    else {
        res.status(400).json({ msg : `Member with ${req.params.id} id not found` });
    }
*/

/* Tutors method */
    const found = members.some(member => member.id === parseInt(req.params.id) );
    console.log(found);

    if(found) {
            res.json(members.filter(member => member.id === parseInt(req.params.id) ));
    }
    else {
        res.status(400).json({ msg : `Member with ${req.params.id} id not found` });
    }
})
// [end] Get specific member using ID


// [start] Create member
router.post('/', (req,res) => {
    console.log('Hi');
    console.log(req.body);
    res.send(req.body);

    // // resetting local object
    // const newMember = undefined;

    // if(!req.body.name || !req.body.email){
    //     res.status(400).json({ msg : `Name and Email Properties are required! `});
    // }
    // else {
    //     // getting id of last member
    //     members.forEach(member => {
    //         var id = member.id;
    //     });
    //     console.log(id);

    //     // initializing local object
    //     newMember = {
    //         id : id++,
    //         name : req.body.name,
    //         email : req.body.email,
    //         status : 'active'
    //     }
    //     console.log(newMember);

    //     // pushing local object to array
    //     members.push(newMember);

    //     // sending whole member array
    //     res.json(members);
    // }


})
