import React from 'react'
import { Form, InputGroup, FormControl,Button } from "react-bootstrap"
import { FiMapPin, FiCalendar } from "react-icons/fi";
import {vehicleList} from "../../data/vehicleList";
import {useFormik} from "formik";
import * as Yup from "yup";

const SliderForm = () => {

const initialValues = {
    car:"",
    pickUpPlace:"",
    dropOffPlace:"",
    pickUpDate: "",
    pickUpTime: "",
    dropOffDate: "",
    dropOffTime: "",
   

}

const validationSchema = Yup.object ({
    car: "",
})

const onSubmit = {}

const formik = useFormik({
    initialValues , validationSchema , onSubmit
})




    return (
        <Form>

            <Form.Select size="lg" className="mb-3">
                <option>Select a car</option>
                {vehicleList.map((vehicle) => (<option value={vehicle.id} key={vehicle.id} > {vehicle.model} </option> ))}
            </Form.Select>

            <InputGroup className="mb-3" >
                <InputGroup.Text id="basic-addon1"  style={{flex:1}}>
                    <FiMapPin />&nbsp; Pick up
                </InputGroup.Text>
                <FormControl
                    placeholder="Type a place"  style={{flex:3}}

                />
            </InputGroup>


            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"  style={{flex:1}}>
                    <FiMapPin />&nbsp; Drop off
                </InputGroup.Text>
                <FormControl
                    placeholder="Username"  style={{flex:3}}

                />
            </InputGroup>


            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1" style={{flex:1}}>
                    <FiCalendar /> &nbsp;Pick up
                </InputGroup.Text>
                <FormControl
                    type="date"  style={{flex:2}} />



                <FormControl
                    type="time"  style={{flex:1}}/>

            </InputGroup>


            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"  style={{flex:1}}>
                    <FiCalendar /> &nbsp;Drop off
                </InputGroup.Text>
                <FormControl
                    type="date" style={{flex:2}} />



                <FormControl
                    type="time" style={{flex:1}} />

            </InputGroup>


<Button size="lg" className="w-100" type="submit"> Continue Reservation </Button>

        </Form>
    )
}

export default SliderForm
