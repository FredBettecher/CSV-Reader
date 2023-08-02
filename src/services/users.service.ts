import { invalidTermError } from '../errors/invalid-term.error';
import usersRepository from '../repositories/index';
import { emptyResearchError } from '../errors/empty-research.error';

export async function searchTerm(term: string) {
  if(!term) throw invalidTermError();
  
  const result = await usersRepository.searchInFile(term);
  if(result.length === 0) throw emptyResearchError();

  return result;
}
