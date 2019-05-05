import React, {Component} from "react";
import Select from 'react-select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


import CoachItem from "./CoachItem";
import CoachesData from "./CoachesData";
import coach from "../assets/coach.svg";
import "./Coach.css";

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

class Coach extends Component {
    constructor() {
        super();

        this.state = {
          company: [],
          value:""
        };

        this.onSearchClick = this.onSearchClick.bind(this);
        this.onRsetClick = this.onRsetClick.bind(this)
    }

    /*
      Method for handling dropdown change
    */
    handleChange(name,value){
      this.setState({ [name] : value });
      console.log(`Option selected:`, this.state);
    }

    /*
      Method for handlng radio options
    */
    onRadioChange = event => {
      this.setState({ value: event.target.value });
    };


    /*
      Method for searching
    */

    onSearchClick(){
      var arr = CoachesData;
      var new_arr = arr.slice();
      var expLowerBound = this.state.experience && this.state.experience.value.split("-")[0];
      var expUpperBound = this.state.experience && this.state.experience.value.split("-")[1];
      var rateLowerBound = this.state.ratePerHour && this.state.ratePerHour.value.split("-")[0];
      var rateUpperBound = this.state.ratePerHour && this.state.ratePerHour.value.split("-")[1];
      var companies = this.state.company && this.state.company;

      var comArr=[]
      let error = ""
      if(this.state.value == "" ){
        error =  "\n ISA value";
      }
      if(companies.length==0){
        error= error+ "\n Atleast one company";
      }
      if(!this.state.experience){
        error= error + "\n Experience level";
      }
      if(!this.state.ratePerHour){
        error= error + "\n Hourly rate";
      }

      if(error==""){
        let isa = this.state.value == "yes" ? true : false
        if(companies){
          companies.forEach((company)=>{
              if(comArr.length>0){
                if(comArr.find(result => result != company.value)){
                    comArr.push(company.value);
                }
              }else {
                comArr.push(company.value)
              }
          })
        }

        var results = []
        let ar ;
        new_arr.forEach((item)=>{
          if(comArr.includes(item.company) && item.isa == isa && item.experience >= expLowerBound && item.experience <= expUpperBound  && item.ratePerHour >= rateLowerBound && item.ratePerHour <= rateUpperBound){
            results.push(item)
          }
        })

        this.setState({
          results: results,
          error:""
        })
      }else{
        this.setState({error})
      }
    }

    /*
      Method for resetting filtered view
    */
    onRsetClick(){
      this.setState({
        experience:[],
        ratePerHour: [],
        company: [],
        value: "",
        results: CoachesData,
        error:""
      })
    }


    /*
      Method for getting options for dropdown
      - can pass any parameter and get ooptions
      - for now I am just passing company
    */

    getOptions(param){
      var arr = CoachesData;
      var new_arr = arr.slice();
      var results = [];

      new_arr.forEach((item)=>{
        if(results.length == 0){
          results.push({
            value: item[param],
            label: item[param]
          });
        }else{
          if (!results.find(result => result.value == item[param])) {
              results.push({
                value: item[param],
                label: item[param]
              });
          }
        }
      })

      if(results.length >0){
        return results.sort((a,b) => (a.value > b.value) ? 1 : ((b.value > a.value) ? -1 : 0)) ;
      }
    }

    render() {
      let coachesComponents;
      if(this.state.results){
        if(this.state.results.length>0){
          coachesComponents= this.state.results.map(coach => (
            <CoachItem key={coach.id} {...coach} />
        ))
        }else{
          coachesComponents = [<h4>Please try different search criteria</h4>]
        }
      }else{
          coachesComponents = CoachesData.map(coach => (
          <CoachItem key={coach.id} {...coach} />
        ))
      }

      const companyOptions= this.getOptions("company")
      const yearOptions= [{value:"0-3",label:"0-3"},{value:"3-7",label:"3-7"},{value:"7-11",label:"7-11"}]
      const priceOptions= [{value:"50-80",label:"50-80"},{value:"80-110",label:"80-110"},{value:"110-140",label:"110-140"},{value:"140-170",label:"140-170"}]
      const { company, ratePerHour, years } = this.state;

      return (
          <div>
              <div className="upperContainer">

              {/* Left container */}

              <div className="left">
                  <img
                      width="90%"
                      src={coach}
                  />
              </div>

              {/* Right container */}

              <div className="right">

              {/* Title dropdown - Can enable this when we have more than one title */}


              {/*  <div style={{display: "flex",marginBottom:"20px"}}>
                  <h4 style={{width: "30%"}}>Title: </h4>
                  <div style={{width: "60%"}}>
                    <Select
                      onChange={this.handleChange.bind(this,"title")}
                      options= {titleOptions}
                    />
                  </div>
                </div>

              */}

              {/* Company dropdown */}

                <div style={{display: "flex",marginBottom:"20px"}}>
                  <h4 style={{width: "30%"}}>Company: </h4>
                  <div style={{width: "60%"}}>
                    <Select
                      onChange={this.handleChange.bind(this,"company")}
                      isMulti={true}
                      options= {companyOptions}
                      isClearable={true}
                    />
                  </div>
                </div>

                {/* Price dropdown */}

                <div style={{display: "flex",marginBottom:"20px"}}>
                  <h4 style={{width: "30%"}}>Price: </h4>
                  <div style={{width: "60%"}}>
                    <Select
                      onChange={this.handleChange.bind(this,"ratePerHour")}
                      options= {priceOptions}
                      isClearable={true}
                    />
                  </div>
                </div>

                {/* Years dropdown */}

                <div style={{display: "flex",marginBottom:"20px"}}>
                  <h4 style={{width: "30%"}}>Years of experience: </h4>
                  <div style={{width: "60%"}}>
                    <Select
                      onChange={this.handleChange.bind(this,"experience")}
                      options= {yearOptions}
                      isClearable={true}
                    />
                  </div>
                </div>



                {/* ISA radio options */}

                <div style={{display: "flex",marginBottom:"20px"}}>
                    <h4 style={{width: "30%"}}>ISA: </h4>
                    <div style={{width: "60%"}}>
                      <RadioGroup
                        aria-label="Gender"
                        name="gender1"
                        className="radio"
                        value={this.state.value}
                        onChange={this.onRadioChange}
                      >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />

                      </RadioGroup>

                  </div>

                </div>

                {/* Errors */}

                <span style={{color:"red"}}>{this.state.error ? this.state.error.split("\n").map((err)=>{
                  return (<span>{err}<br/ ></span>)
                }) : null}</span>

                {/* Search button */}
                <div
                    style={{alignSelf: "flex-start", marginRight:"50px"}}
                    className="landing-button"
                    onClick={this.onSearchClick}
                >
                    Search
                </div>

                {/* Reset button */}

                <div
                    style={{alignSelf: "flex-start"}}
                    className="landing-button"
                    onClick={this.onRsetClick}
                >
                    Reset
                </div>
               </div>
              </div>

              {/* render coach component */}

              <div className="container">
                  {coachesComponents}
              </div>

          </div>
        );
    }
}

export default Coach;
