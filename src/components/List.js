import React from 'react';
import {connect} from 'react-redux';
import {addArticle, showDetail} from '../actions';

class List extends React.Component {

    render() {
        return (<div>

                <ul>
                    {this.props.msgs.map((el, index) => (
                        <li key={index}>
                            {el}
                            <button onClick={() => this.props.showDetail(el)}>Detail</button>
                        </li>


                    ))}
                </ul>

                {/*insert detail*/}

                {/*{*/}
                {/*    this.state.showDetail ?*/}
                {/*        <Detail/> : <div></div>*/}
                {/*}*/}


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        msgs: state.msgsPack
    }; //now it will appear as props
};


export default connect(mapStateToProps, {addArticle, showDetail})(List);
