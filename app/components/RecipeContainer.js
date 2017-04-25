import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchRecipes from '../actions/fetch'
import RecipeItem from './RecipeItem'
import { ScrollView, Image, Text } from 'react-native'

export class RecipesContainer extends PureComponent {
  static propTypes = {
    recipes: PropTypes.array.isRequired,
    fetchRecipes: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchRecipes()
  }

  renderRecipe(recipe, index) {
    return <RecipeItem key={ index } { ...recipe } />
  }

  render() {
    return(
      <ScrollView>
        { console.log(this.props) }
        { this.props.recipes.map(this.renderRecipe.bind(this)) }
      </ScrollView>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({ recipes })

export default connect(mapStateToProps, {
  fetchRecipes })(RecipesContainer)