package gram.com.Security;

import java.net.http.HttpRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfigurations {
    @Autowired
    TokenFilter tokenFilter;

    @Bean //instanciamemto da classe
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity ) throws Exception{
        return httpSecurity
            .csrf(csfr -> csfr.disable()) //desabilitando configurações padrão
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS) )//setando para stateless
        //configuração das rotas
            .authorizeHttpRequests(authorize -> authorize
            .requestMatchers(HttpMethod.POST, "/login/auth").permitAll()
            .requestMatchers(HttpMethod.POST, "/login/signup").permitAll()
            //.requestMatchers(HttpMethod.GET, "/login/vac").hasRole("USER")
            .requestMatchers(HttpMethod.GET, "/login/vac").permitAll()
            .requestMatchers(HttpMethod.GET, "/login/find/*").permitAll()
            //.anyRequest().authenticated()
            //.anyRequest().permitAll()
        
            )
        .addFilterBefore(tokenFilter, UsernamePasswordAuthenticationFilter.class)
        .build();
    }

    @Bean
    public AuthenticationManager authorizationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception{
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder getPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }

}
