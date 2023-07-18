import { ResolveFn } from '@angular/router';
import {
  TopCharacterListInterface,
  TopCharactersService,
} from '../services/top-characters.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const topCharactersResolver: ResolveFn<TopCharacterListInterface> = (
  route,
  state
) => {
  const topCharacters = inject(TopCharactersService);

  return topCharacters.getTopCharacterList().pipe(map((val) => val));
};
