import { Routes } from '@angular/router';
import { PhotoGridComponent } from './photo-grid/photo-grid.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { InicioComponent } from './inicio/inicio.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { TodosComponent } from './todos/todos.component';
import { CommentsComponent } from './comments/comments.component';

export const routes: Routes = [
  { path: '', component: InicioComponent }, // Página de inicio
  { path: 'photos', component: PhotoGridComponent }, // Ruta para fotos
  { path: 'usuarios', component: UsuariosComponent }, // Ruta para usuarios
  { path: 'posts', component: PostsComponent }, // Ruta para posts
  { path: 'albums', component: AlbumsComponent }, // Ruta para álbumes,
  { path: 'todos', component: TodosComponent },
  { path: 'comments', component: CommentsComponent },
  
];
