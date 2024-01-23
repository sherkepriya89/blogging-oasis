// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require semantic-ui
//= require_tree .

$(document).ready(function () { $('.ui.dropdown').dropdown(); })
