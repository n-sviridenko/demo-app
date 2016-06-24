import { connect } from 'react-redux';
import <%= pascalEntityName %> from '../<%= dumbPath %>/<%= pascalEntityName %>';

const mapStateToProps = state => ({
});

const mapActionCreators = {
};

export default connect(mapStateToProps, mapActionCreators)(<%= pascalEntityName %>);
