function ChangePassword() {
    return (

        <div className="tab-pane" id="change-password">
            <div className="profile-head">
                <h3>Change Password</h3>
            </div>
            <form className="edit-profile">
                <div className="">
                    <div className="form-group row">
                        <div className="col-12 col-sm-8 col-md-8 col-lg-9 ml-auto">
                            <h3>Password</h3>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-12 col-sm-4 col-md-4 col-lg-3 col-form-label">
                            Current Password
                        </label>
                        <div className="col-12 col-sm-8 col-md-8 col-lg-7">
                            <input className="form-control" type="password" defaultValue="" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-12 col-sm-4 col-md-4 col-lg-3 col-form-label">
                            New Password
                        </label>
                        <div className="col-12 col-sm-8 col-md-8 col-lg-7">
                            <input className="form-control" type="password" defaultValue="" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-12 col-sm-4 col-md-4 col-lg-3 col-form-label">
                            Re Type New Password
                        </label>
                        <div className="col-12 col-sm-8 col-md-8 col-lg-7">
                            <input className="form-control" type="password" defaultValue="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-4 col-md-4 col-lg-3" />
                    <div className="col-12 col-sm-8 col-md-8 col-lg-7">
                        <button type="reset" className="btn">
                            Save changes
                        </button>
                        <button type="reset" className="btn-secondry">
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>


    );
}

export default ChangePassword;