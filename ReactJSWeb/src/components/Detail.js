import React from 'react';
class Detail extends React.Component{
    state = {
        loading: true,
        temp: null
      };
    
      async componentDidMount() {
        const url = "https://api.harvardartmuseums.org/exhibition/?venue=HAM&apikey=595c933f-25b3-4e12-87f6-b01e680bb679";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ temp: data.records[0], loading: false });
        console.log(this.state.temp.venues[0].name);
      }

    render(){
        if (this.state.loading) {
            return <div>loading...</div>;
          }
      
          if (!this.state.temp) {
            return <div>didn't get an info</div>;
          }
          
        return(
            <div className="jumbotron text-center" style={{height: '100vh', marginBottom:'0px',backgroundColor:'#ECECEC'}}>
                <h1 className="display-1" style={{fontSize:"50px"}}>Detail Pameran "{this.state.temp.title}" <hr/></h1>
                
                <div className="card text-center " style={{width: '40rem', height: '25rem', margin: '0 auto', float: 'none', marginBottom: '10px', marginTop:'100px', backgroundColor:'#5E5E5E'}}>
                    <h2 className="card-title" style={{marginTop :'25px'}}>Artifak</h2>
                    <img src="https://ids.lib.harvard.edu/ids/view/43337862" className="card-img-top rounded mx-auto d-block w-80 p-3" alt="..."/>
                <div className="card-body">
                    
                    <table className="table table-striped display-5" style={{marginTop:'25px'}}>
                            <tr>
                             <td scope="col">Title</td>
                            <td scope="col">{this.state.temp.title}</td>
                            </tr>
                            <tr>
                            <td scope="row">Begin Date</td>
                            <td scope="row">{this.state.temp.begindate}</td>
                            </tr>
                            <tr>
                            <td scope="row">Description</td>
                             <td scope="row">{this.state.temp.venues[0].name}</td>
                            </tr>
                    </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;