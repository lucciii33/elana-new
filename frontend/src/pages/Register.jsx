import { useState, useEffect } from 'react'

function Register() {
    const [ formData, setFormData ] = useState({
        firstName: "",
        lastName: "",
        practiceName: "",
        practiceNumber: "",
        email: "",
        password: "",
        licensingCredentials: "",
        areaOfSpecialty: ""
    })

    const { firstName, lastName, practiceName, practiceNumber, email, password, licensingCredentials, areaOfSpecialty } = formData

    const onChange = (e) => {
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <section className='heading'>
                <h1>Register</h1>
                <p>Please create an account</p>
            </section>
            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input type="text" className="form-control" id="firstName" name="firstName" value={firstName} placeholder="Enter your first Name" onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <input type="text" className="form-control" id="lastName" name="lastName" value={lastName} placeholder="Enter your last Name" onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <input type="text" className="form-control" id="practiceName" name="practiceName" value={practiceName} placeholder="Enter your practiceName" onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <input type="text" className="form-control" id="practiceNumber" name="practiceNumber" value={practiceNumber} placeholder="Enter your practiceNumber" onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <input type="text" className="form-control" id="email" name="email" value={email} placeholder="Enter your email" onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <input type="text" className="form-control" id="password" name="password" value={password} placeholder="Enter your password" onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <input type="text" className="form-control" id="licensingCredentials" name="licensingCredentials" value={licensingCredentials} placeholder="Enter your licensingCredentials" onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <input type="text" className="form-control" id="areaOfSpecialty" name="areaOfSpecialty" value={areaOfSpecialty} placeholder="Enter your areaOfSpecialty" onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-block'>Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register