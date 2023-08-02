import { invalidTermError } from '../errors/invalid-term.error';
import usersRepository from '../repositories/index';
import { emptySearchError } from '../errors/empty-search.error';

export async function searchTerm(term: string) {
  if(!term) throw invalidTermError();
  
  const result = await usersRepository.searchInFile(term);
  if(result.length === 0) throw emptySearchError();

  return result;
}
