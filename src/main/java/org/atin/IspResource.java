package org.atin;

import java.io.File;

import javax.persistence.TypedQuery;
import javax.servlet.ServletContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

import model.Provider;

@Path("isp")
@Consumes({"application/xml", "application/json", "text/xml" })
@Produces({"application/xml", "application/json", "text/xml" })
public class IspResource {
	
	private Class<Provider> entityClass = Provider.class;
	
    @GET
    @Produces({"application/xml", "application/json" })
    public Response getProviders(
    		@QueryParam("type") String type,
            @QueryParam("query") String query) {
    	
    	TypedQuery<Provider> tquery =
    			JPAUtility.getEntityManager().createNamedQuery("Provider.findAll", entityClass);
    	
    	return Response.ok(tquery.getResultList()).build();
    }
    
    @GET  
    @Path("/download")  
    @Produces("application/pdf")  
    public Response downloadFile(
    		@QueryParam("filename") String fileName,
    		@Context ServletContext servletContext) {
    	
    	String downloadFilePath =
    			servletContext.getRealPath("/") + "\\isp\\" + fileName + ".pdf";
    	
        File file = new File(downloadFilePath);  
        ResponseBuilder response = Response.ok((Object) file);  
        response.header("Content-Disposition","attachment; filename=\"download.pdf\"");  
        return response.build();
    }
}
