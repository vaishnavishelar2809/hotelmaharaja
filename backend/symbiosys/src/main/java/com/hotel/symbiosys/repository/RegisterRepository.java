package com.hotel.symbiosys.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.hotel.symbiosys.model.Register;
@Repository
@Qualifier("regRepo")
public interface RegisterRepository extends JpaRepository<Register, Long> {
        //query for login
	@Query(nativeQuery=true,value="select*from register where email=:email and password=:password")
   Register findByEmailAndPassword(@Param("email") String email,@Param("password")String password);
}
