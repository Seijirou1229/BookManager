package server.web;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Optional;


@Component
public class WebMvcConfigProvider {
    @Bean
    public WebMvcConfigurer corsConfigure(
            @Value("${server.allowed-origin:#{null}}") Optional<String> allowedOrigin
    ) {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                allowedOrigin.ifPresent(h -> {
                    registry.addMapping("/**")
                            .allowedOrigins(h)
                            .allowedHeaders(CorsConfiguration.ALL)
                            .allowedMethods(CorsConfiguration.ALL);
                });
            }
        };
    }
}
