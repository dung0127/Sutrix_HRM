import React from 'react';

class AddStaff extends React.Component {
    

    render () {
        return (
            <section>
                <div className="content">
                    <div className="row detail">
                    <div className="col-md-7">
                        <div className="row">
                        <div className="col-md-4"><div>Frist Name:</div></div>
                        <input type="text" name="lastname" />
                        </div>
                        <div className="row">
                        <div className="col-md-4"><div>Last Name:</div></div>
                        <input type="text" name="lastname" />
                        </div>
                        <div className="row">
                        <div className="col-md-4"><div>Date of Birth:</div></div>
                        <input type="text" name="lastname" />
                        </div>
                        <div className="row">
                        <div className="col-md-4"><div>Gender:</div></div>
                        <input style={{width: '20px', height: '20px', transform: 'translateY(6px)', margin: '0px 10px'}} type="radio" defaultValue="False" defaultChecked /> Male
                        <input style={{width: '20px', height: '20px', transform: 'translateY(6px)', margin: '0px 10px'}} type="radio" defaultValue="True" /> Female
                        </div>
                        <div className="row">
                        <div className="col-md-4"><div>Address:</div></div>
                        <input type="text" name="lastname" />
                        </div>
                        <div className="row">
                        <div className="col-md-4"><div>ID:</div></div>
                        <input type="text" name="lastname" />
                        </div>
                        <div className="row">
                        <div className="col-md-4"><div>Mobile:</div></div>
                        <input type="text" name="lastname" />
                        </div>
                        <div className="row">
                        <div className="col-md-4"><div>Skype:</div></div>
                        <input type="text" name="lastname" />
                        </div>
                        <div className="row">
                        <div className="col-md-4"><div>Email:</div></div>
                        <input type="text" name="lastname" />
                        </div>
                        <div className="row">
                        <div className="col-md-4"><div>Join Date:</div></div>
                        <input type="text" name="lastname" />
                        </div>
                        <div className="row">
                        <div className="col-md-4"><div>Department:</div></div>
                        <select>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        </div>
                        <button style={{marginLeft: '550px'}}>Add</button>
                    </div>
                    <div className="col-md-5">
                        <img src="images/avatar.jpg" alt="Smiley face" height="300px" width="300px" />
                    </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default AddStaff;