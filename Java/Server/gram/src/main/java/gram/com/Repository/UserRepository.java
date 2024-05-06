package gram.com.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import gram.com.Model.User;

public interface UserRepository extends JpaRepository<User, String> {
    UserDetails findByLogin(String Login);
}
