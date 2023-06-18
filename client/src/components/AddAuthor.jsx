import React from 'react'
import Button from '@mui/material/Button'

const AddAuthor = () => {


  return (
    <div>
        <h2 style={{marginBottom:"0px"}}>ADD A NEW AUTHOR</h2>
        <Button style={{margin:"10px", scale:"70%"}} variant="contained">Back to Home</Button>
            <div style={{
                height:"150px",
                width:"350px",
                border:"black solid 1px",
                margin:"auto"}}>
                    <p>Name:</p>
                    <input style={{padding:"5px", width:"250px"}} type="text"/>
                    <br />
                    <button style={{
                        padding:"8px 20px",
                        margin:"10px 10px 0px 0px",
                        backgroundColor:"lightBlue",
                        border:"black 1px solid",
                        borderRadius:"3px",
                        cursor:"pointer"}}>
                        Add Author</button>

                    <button style={{
                        padding:"3px 10px",
                        cursor:"pointer"}}>
                        Cancel</button>
            </div>
    </div>
  )
}

export default AddAuthor