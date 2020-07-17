package e5.proyectoCIRSB.aportesMensuales;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AportesServiceIm implements AportesService {

	@Autowired
	private IAportes iAportes;
	
	@Override
	public List<AportesEntity> findAll() {
		// TODO Auto-generated method stub
		return (List<AportesEntity>) iAportes.findAll();
	}

	@Override
	public AportesEntity save(AportesEntity aporte) {
		// TODO Auto-generated method stub
		return iAportes.save(aporte);
	}

	@Override
	public void delete(Integer idAporte) {
		// TODO Auto-generated method stub
		iAportes.deleteById(idAporte);
	}

	@Override
	public AportesEntity findById(Integer idAporte) {
		// TODO Auto-generated method stub
		return iAportes.findById(idAporte).orElseThrow(null);
	}

}
