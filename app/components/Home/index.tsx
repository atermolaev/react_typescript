import React from 'react';

interface IProps {
    
}

class Home extends React.Component {
    constructor(props: IProps){
        super(props)

        this.state = {
            data: []
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
    }

    render(){
        return (
            <div>
                <div>Home. lk.metricaonline.com</div>                
                <div>123</div>
            </div>
        )
    }
}

export default Home