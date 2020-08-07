package e5.proyectoCIRSB.solicitudes;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


public interface ISolicitudes extends CrudRepository <SolicitudesEntity, Integer>{
	
	@Query("from SolicitudesEntity s where s.estadoSolicitud = 'pendiente'")
	public List<SolicitudesEntity> finByEstado ();

	@Modifying
	@Query(value="INSERT INTO usuariossolicitudes(id_solicitud, ci_usuario) VALUES (:id_solicitud, :ci_usuario)", nativeQuery = true)
	@Transactional
	public void tablaIntermedia(@Param("id_solicitud") Integer id_solicitud, @Param("ci_usuario") String ci_usuario);
}
