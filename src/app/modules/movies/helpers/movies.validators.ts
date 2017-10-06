import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const checkOnExtraValues = (primaryArr: any[], newArray: any[]): any[] =>
  newArray.filter(value => !primaryArr.includes(value));


export class MoviesValidators {
  static validateGenres(control: AbstractControl): ValidationErrors {
    const genres = [ "Crime", "Drama", "Action", "Adventure", "Fantasy"];
    const extraValues = checkOnExtraValues(genres, control.value);

    if(extraValues.length) return { validateGenres: { extra: extraValues } };

    return null;
  }

  static validateForDublicate(control: AbstractControl): ValidationErrors {
    const valuesSet = new Set();
    const duplicateValues = control.value.filter(value => {
      if(valuesSet.has(value)) return true;
      valuesSet.add(value);
    })

    if(duplicateValues.length) return { validateForDublicate: { extra: duplicateValues } };

    return null;
  }

  //async validator
  static validateAsyncDirector(control: AbstractControl): Observable<ValidationErrors> {
    const directors = [
      "Frank Darabont", "Francis Ford Coppola", "Nolan", "Sidney Lumet",
      "Steven Spielberg","Quentin Tarantino", "Peter Jackson", "Sergio Leone",
      "David Fincher", "Irvin Kershner", "Robert Zemeckis"
    ];
    const extraValues = checkOnExtraValues(directors, control.value);

    if(extraValues.length) return of({ validateAsyncDirector: { extra: extraValues } });

    return of(null);
  }
}
