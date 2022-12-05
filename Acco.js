import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
 
 function Acco(){
return(

    <div className="bs-example">
    <div className="panel-group" id="accordion">
        <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title pull-left">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Demographics</a>
                </h4>
                <div className="pull-right">
                  <label className="checkbox-inline"><input type="checkbox" value=""/>Admission</label>
                  <label className="checkbox-inline"><input type="checkbox" value=""/>Non-Admission</label>
                </div>
                <div className="clearfix"></div>
            </div>
            <div id="collapseOne" className="panel-collapse collapse in">
                <div className="panel-body">
                  <div className="col-sm-6 col-md-6">
                    <label className="checkbox"><input type="checkbox" value=""/>NHS Number</label>
                    <label className="checkbox"><input type="checkbox" value=""/>NHS Verification</label>
                    <label className="checkbox"><input type="checkbox" value=""/>Weight</label>
                    <label className="checkbox"><input type="checkbox" value=""/>Height</label>
                    <label className="checkbox"><input type="checkbox" value=""/>Normal BP</label>

                  </div>
                  <div className="col-sm-6 col-md-6">
                    <label className="checkbox"><input type="checkbox" value=""/>NOK Details</label>
                    <label className="checkbox"><input type="checkbox" value=""/>NOK Address</label>
                    <label className="checkbox"><input type="checkbox" value=""/>Ethnic group - Local list</label>
                    <label className="checkbox"><input type="checkbox" value=""/>Address</label>
                    <label className="checkbox"><input type="checkbox" value=""/>Language</label>          
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <label for="usr">Custom Name:</label>
                    <input type="text" className="form-control" id="usr"/>
                  </div>
                </div>
            </div>
        </div>
        <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title pull-left">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Admission</a>
                </h4>
                <div className="pull-right">
                  <label className="checkbox-inline"><input type="checkbox" value=""/>Admission</label>
                  <label className="checkbox-inline"><input type="checkbox" value=""/>Non-Admission</label>
                </div>
                <div className="clearfix"></div>
            </div>
            <div id="collapseTwo"className="panel-collapse collapse">
                <div className="panel-body">
                  <div className="col-sm-6 col-md-6">
                    <label className="checkbox"><input type="checkbox" value=""/>ICU dates &amp; times</label>
                    <label className="checkbox"><input type="checkbox" value=""/>HDU dates &amp; times</label>
                    <label className="checkbox"><input type="checkbox" value=""/>CCU dates &amp; times</label>
                    <label className="checkbox"><input type="checkbox" value=""/>ICU/HDU discharge details</label>
                    <label className="checkbox"><input type="checkbox" value=""/>Time of call for ICU discharges</label>
                    <label className="checkbox"><input type="checkbox" value=""/>Source of admission</label>
                    <label className="checkbox"><input type="checkbox" value=""/>Consultant</label>
                    <label className="checkbox"><input type="checkbox" value=""/>Allow patient renumbering</label>
                    <label className="checkbox"><input type="checkbox" value=""/>Prior surgery undertaken</label>
                    <label className="checkbox"><input type="checkbox" value=""/>Planned admission</label>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <label class="checkbox"><input type="checkbox" value=""/>Default time of response</label>
                    <label className="checkbox"><input type="checkbox" value=""/>Original hospital admission date</label>
                    <label className="checkbox"><input type="checkbox" value=""/>Speciality enterable</label>
                    <label className="checkbox"><input type="checkbox" value=""/>Scored/Triggered by ward</label>
                    <label className="checkbox"><input type="checkbox" value=""/>NEWS Score</label>  
                    <label className="checkbox"><input type="checkbox" value=""/>Called for in first trigger</label>
                    <label className="checkbox"><input type="checkbox" value=""/>Hospital admission date</label>
                    <label className="checkbox"><input type="checkbox" value="" />Location prior to source</label>
                    <label className="checkbox"><input type="checkbox" value="" />Location</label>
                    <label className="checkbox"><input type="checkbox" value="" />Hospital</label>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <label for="usr">Custom Name:</label>
                    <input type="text" className="form-control" id="usr" />
                  </div>
                </div>
            </div>
        </div>
        <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title pull-left">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Discharge</a>
                </h4>
                <div class="pull-right">
                  <label class="checkbox-inline"><input type="checkbox" value=""/>Admission</label>
                  <label class="checkbox-inline"><input type="checkbox" value=""/>Non-Admission</label>
                </div>
                <div class="clearfix"></div>
            </div>
            <div id="collapseThree" class="panel-collapse collapse">
                <div class="panel-body">
                    <p>CSS stands for Cascading Style Sheet. CSS allows you to specify various style properties for a given HTML element such as colors, backgrounds, fonts etc. <a href="http://www.tutorialrepublic.com/css-tutorial/" target="_blank">Learn more.</a></p>
                </div>
            </div>
        </div>
    </div>
    <p><strong>Note:</strong> Click on the linked heading text to expand or collapse accordion panels.</p>
</div>

)
}
export default Acco