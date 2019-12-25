import React from 'react';
import './projectsbox.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import python from './pythontreemap.png';


export class ProjectsBox extends React.Component{

    render(){
        return (
            <div className="ProjectsBox">
                 <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
                <div class ="container">
                    <div class ="row">
                        <div class="col-lg-4 col-md-4 col-sm-3 col-xs-3">
                            <div class = "thumbnail">
                                <img src={python} alt="..." height="75" width = "75"></img>
                                <div class = "caption">
                                    <h3>Python Tree Map</h3>
                                    <p>Using python, a visual representation of a tree was made in order 
        to see the different levels there were to a folder in a computer. Recursion was mainly used to implement it.</p>
                                    <p><a href="#" class = "btn btn-primary" role ="button">Read More</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-3 col-xs-3">
                            <div class = "thumbnail">
                                <img src={python} alt="..." height="75" width = "75"></img>
                                <div class = "caption">
                                    <h3>Verilog Simon Says</h3>
                                    <p>Using python, a visual representation of a tree was made in order 
        to see the different levels there were to a folder in a computer. Recursion was mainly used to implement it.</p>
                                    <p><a href="#" class = "btn btn-primary" role ="button">Read More</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-3 col-xs-3">
                            <div class = "thumbnail">
                                <img src={python} alt="..." height="75" width = "75"></img>
                                <div class = "caption">
                                    <h3>Java Android Game</h3>
                                    <p>Using python, a visual representation of a tree was made in order 
        to see the different levels there were to a folder in a computer. Recursion was mainly used to implement it.</p>
                                    <p><a href="#" class = "btn btn-primary" role ="button">Read More</a></p>
                                </div>
                            </div>
                    </div>
                    </div>
                    </div>
                    </div>
              
                
                    
                

            
        )

    }
}

export default ProjectsBox;