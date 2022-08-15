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
                <div>Home. lk.metricaonline.com test5</div>                
                <div>123</div>
            </div>
        )
    }
}

export default Home