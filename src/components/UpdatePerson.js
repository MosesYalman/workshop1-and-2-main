import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForce } from "react-hook-form";
import HookService from "../service/HookService";



const UpdatePerson = () => {

    const params = useParams();
    const [person, setPerson] = useState({id: 0, firstName: " ", lastName: " ", email: " ", title: " "});
    const [message, setMessage] = useState({value: " ", type: " "});
    const history = useNavigate();
    const [reload, setReload] = useState(false);


    useEffect(()=> {
        const HookService = new HookService();
        HookService.getPersonById(params.Id).then(res => {
            console.log("Person:" , res);
            if(res.status === 200){
                setPerson(res.data);
            }else {
                setMessage({value: "API err: "+ res.status, type: "danger"})

            }

        });
    },[] );


    const Form = () => {
        
        const {register, handleSubmit, reset, formState: {errors} } = useForce();

        const savePerson = (data) =>{
            console.log("before"+ data);
            data.id = person.id;
            console.log("after"+data);

            const hookService = new HookService();
            hookService.UpdatePerson(data).then(res => {
                if(res.status === 204){
                    setMessage({value: "Done for person Id:" + res.data.id , type: "success"});
                    setReload(!reload); 
                }else {
                    setMessage({value: "Error:"+ res.status,type: "danger"});
                }
            });
            history("/details/$(data.id)");
            history("/crud/");
        }
    }
}