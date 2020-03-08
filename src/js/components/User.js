import React from 'react';
import moment from 'moment'

class User extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { userData, loadUser } = this.props
        return (
            <div >
                <div className="view-user">
                    <div>
                        User id: {userData && userData.id}
                    </div>
                    <div>
                        Title: {userData && userData.company && userData.company.catchPhrase}
                    </div>
                </div>
                <div className="button">
                    <div>
                        <button onClick={loadUser}>
                            Click Me
                        </button>
                    </div>
                    <div >
                        MAP CREATED BY: {userData && userData.name}  on {moment().format('l')}
                    </div>
                </div>
            </div>
        );
    }
};

export default User;

