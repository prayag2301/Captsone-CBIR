import React from "react";
import { Grid } from "@mui/material";

function Formm() {
    return (
        <div>
            <Data />
        </div>
    );
}
export default Formm
class Data extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{
                "path": "Brain_DS/Moderate_Demented/moderate_55.jpg",
                "age": 69,
                "feedback": "Moderate_Demented"
            }],
        }
    }

    fetchData() {
        fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=9')
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    data: data
                });
            });
    }

    componentDidMount() {
        this.fetchData();
    }
    // fetchData() {
    //     fetch('')
    //     .then(response=>response.json())
    //     .then((data) =>{
    //       this.setState({
    //         data:data
    //       })
    //     })
    //   }

    //   componentDidMount(){
    //     this.fetchData()
    //   }
    render() {

        const damta = this.state.data
        console.log(damta)

        const display = damta.map((item) =>

            <Grid style={{ padding: '20px', marginLeft: '20px' }} item xs={2} sm={2} md={3} key={item}>
                <div class='flip-card'>
                    <div class='flip-card-inner'>
                        <div class='flip-card-front'>
                            <img src={item.url}
                                height='200px'
                                width='300px'
                                alt=''>
                            </img>
                        </div>
                        <div class='flip-card-back'>
                            <h3 style={{ margin: '40px' }}> Album Id = {item.albumId}</h3>
                            <h4>ID = {item.id}</h4>
                            <h6>Title= {item.title}</h6>

                        </div>
                    </div>
                </div>
            </Grid>


        )


        return (
            <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }} style={{ marginTop: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                {display}
            </Grid>
            // <div>
            //     {display}
            // </div>

        )
    }
}