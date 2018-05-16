//package com.edg.Tests;
//
//
//import com.easycook.controller.ServerController;
//import com.easycook.service.ServerService;
//import org.assertj.core.api.Assertions;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.RequestMapping;
//
//
//
//import org.hamcrest.Matchers;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.boot.test.autoconfigure.json.JsonTest;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.context.web.WebAppConfiguration;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.MvcResult;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//import org.springframework.test.web.servlet.setup.MockMvcBuilders;
//
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
//import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;
//import org.springframework.web.context.WebApplicationContext;
//
//
//@RunWith(SpringRunner.class)
//@WebMvcTest(controllers = ServerController.class)
//@WebAppConfiguration
//@JsonTest
//public class ServerControllerTest {
//    private MockMvc mockMvc;
//
//    @Autowired
//    private WebApplicationContext webApplicationContext;
//    @MockBean
//    private ServerController serverControllerMock;
//
//    @Before
//    public void before() {
//        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
//    }
//
//    @Test
//    public void testIndex() throws Exception{
//        this.mockMvc.perform(get("/"))
//                .andExpect(status().isOk())
//                .andExpect(view().name("index"))
//                .andDo(print());
//    }
//
//    @Test
//    public void testOrder() throws Exception{
//        this.mockMvc.perform(get("/order"))
//                .andExpect(status().isOk())
//                .andExpect(view().name("order"))
//                .andDo(print());
//    }
//
//    @Test
//    public void testThanks() throws Exception{
//        this.mockMvc.perform(get("/thanks"))
//                .andExpect(status().isOk())
//                .andExpect(view().name("thanks"))
//                .andDo(print());
//    }
//
//    @Test
//    public void testLogin() throws Exception{
//        this.mockMvc.perform(get("/login"))
//                .andExpect(status().isOk())
//                .andExpect(view().name("login"))
//                .andDo(print());
//    }
//}