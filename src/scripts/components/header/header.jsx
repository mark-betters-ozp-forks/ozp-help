var Reflux = require('reflux');

var React = require('react');
var GlobalActions = require('../../actions/GlobalActions.jsx');

var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;

module.exports = React.createClass({
  mixins: [ Router.State, Reflux.ListenerMixin],

  contextTypes: {
    router: React.PropTypes.func
  },

  render: function(){
    var router = this.context;

    return (
      <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
          {/*
            <a className="input-group search pull-right" href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_search">
                <input type="text" placeholder="search" className="pull-right" />
                <span className="input-group-addon"><i className="icon-search"></i></span>
            </a>
          */}
          <h3 className="modal-title">Help</h3>
      </div>
    );
  }
});
