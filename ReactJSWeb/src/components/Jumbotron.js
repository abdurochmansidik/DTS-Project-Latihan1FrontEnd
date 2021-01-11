import React from 'react';
class Jumbotron extends React.Component{
    render(){
        return(
            <div className="container text-center" style={{ marginBottom:'0px',backgroundColor:'#ECECEC'}}>
                <h1 className="display-4">DETAIL PAMERAN NAMA_PAMERAN <hr/></h1>
                
                <div className="card text-center " style={{width: '40rem', height: '25rem', margin: '0 auto', float: 'none', marginBottom: '10px', marginTop:'100px', backgroundColor:'#5E5E5E'}}>
                    <h2 className="card-title">Artifak</h2>
                    <img src="https://ids.lib.harvard.edu/ids/view/43337862" className="card-img-top rounded mx-auto d-block w-100 p-3" alt="..."/>
                <div className="card-body">
                    <table className="table table-striped display-5 my-3">
                            <tr>
                            <td scope="col">Tittle</td>
                            <td scope="col">Dummy</td>
                            </tr>
                            <tr>
                            <td scope="row">Begin Date</td>
                            <td scope="row">Dummy</td>
                            </tr>
                            <tr>
                            <td scope="row">Description</td>
                            <td scope="row">Dummy</td>
                            </tr>
                    </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default Jumbotron;